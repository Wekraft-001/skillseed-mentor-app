import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { PageMetadata } from "../components/PageMetadata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import { toast, ToastContainer } from "react-toastify";

const languageOptions = [
  { value: "English", label: "English" },
  { value: "French", label: "French" },
  { value: "Swahili", label: "Swahili" },
  { value: "Spanish", label: "Spanish" },
  { value: "German", label: "German" },
];

const ProfileSetup = () => {
  const apiURL = import.meta.env.VITE_REACT_APP_BASE_URL;
  const token = localStorage.getItem("mentorToken");
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [expertise, setExpertise] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [languages, setLanguages] = useState([]);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dirty, setDirty] = useState(false);

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    fullName: "",
    title: "",
    bio: "",
    experience: "",
    education: "",
    linkedin: "",
    city: "",
    country: "",
  });

  const fetchUserDetails = async () => {
    const { data } = await axios.get(`${apiURL}/mentor/dashboard/profile`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  };

  const {
    data: userData,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["profile-data"],
    queryFn: fetchUserDetails,
    enabled: !!token,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    if (!userData) return;

    setProfile({
      firstName: userData.firstName || "",
      lastName: userData.lastName || "",
      email: userData.email || "",
      fullName: `${userData.firstName || ""} ${userData.lastName || ""}`.trim(),
      title: userData.specialty || "",
      bio: userData.biography || "",
      experience: String(userData.yearsOfExperience ?? ""),
      education: userData.education || "",
      linkedin: userData.linkedin || "",
      city: userData.city || "",
      country: userData.country || "",
    });

    setExpertise(
      Array.isArray(userData.areasOfExpertise) ? userData.areasOfExpertise : []
    );

    // Map backend languages to react-select options; include unknowns gracefully
    const toOption = (lang) => {
      const known = languageOptions.find(
        (o) => o.value.toLowerCase() === String(lang).toLowerCase()
      );
      return known || { value: String(lang), label: String(lang) };
    };
    setLanguages(
      Array.isArray(userData.languages) ? userData.languages.map(toOption) : []
    );

    setPreview(userData.image || null);
  }, [userData]);

  // expertise handlers
  const handleAddExpertise = (e) => {
    e.preventDefault();
    const val = inputValue.trim();
    if (!val) return;
    if (!expertise.includes(val)) setExpertise((prev) => [...prev, val]);
    setInputValue("");
  };
  const handleRemoveExpertise = (tag) =>
    setExpertise((prev) => prev.filter((t) => t !== tag));

  // language select
  const handleLanguageChange = (selected) => {
    setLanguages(selected || []);
  };

  // text inputs
  const handleChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  // image handler
  const handleImageChange = (e) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
    if (file) setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("firstName", profile.firstName);
      formData.append("lastName", profile.lastName);
      formData.append("specialty", profile.title);
      formData.append("biography", profile.bio);
      formData.append("yearsOfExperience", profile.experience);
      formData.append("education", profile.education);
      formData.append("linkedin", profile.linkedin);

      expertise.forEach((item) => formData.append("areasOfExpertise[]", item));
      languages.forEach((opt) => formData.append("languages[]", opt.value));

      if (image) formData.append("photo", image);

      await axios.patch(`${apiURL}/mentor/dashboard/update-profile`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      // optional: refresh cache then navigate
      await queryClient.invalidateQueries({ queryKey: ["profile-data"] });
      // navigate("/verification");
      toast.success("Profile Successfully updated");
      setDirty(false);
    } catch (err) {
      console.error("Update failed:", err);
      toast.error("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  if (isLoading) return null;
  if (isError) {
    console.error(error);
  }

  return (
    <>
      <ToastContainer />
      <PageMetadata
        title="Mentor's Profile Setup"
        description="Complete your mentor profile for kids to connect with you"
      />
      <main className="bg-[#F5F7FA] min-h-[800px] py-8">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h1 className="text-lg md:text-2xl font-semibold text-[#212121] mb-6">
              Complete Your Mentor Profile
            </h1>

            {/* Personal Info */}
            <section className="mb-10">
              <h2 className="md:text-xl font-semibold mb-6">
                Personal Information
              </h2>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 relative">
                  <div className="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center border-2 border-dashed border-gray-300 overflow-hidden">
                    {preview ? (
                      <img
                        src={preview}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={faCamera}
                        className="text-gray-400 text-2xl"
                      />
                    )}
                  </div>
                  <label className="absolute bottom-0 right-0 bg-[#1A73E8] p-2 rounded-full text-white cursor-pointer">
                    <FontAwesomeIcon icon={faPlus} />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={profile.fullName}
                        disabled
                        className="w-full px-4 py-2 rounded-full border bg-gray-100 text-gray-500 cursor-not-allowed"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Professional Title
                      </label>
                      <input
                        type="text"
                        value={profile.title}
                        onChange={(e) => handleChange("title", e.target.value)}
                        className="w-full px-4 py-2 rounded-full border focus:border-[#1A73E8] outline-none"
                        placeholder="e.g., Data Analyst"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Bio (100-150 words)
                    </label>
                    <textarea
                      value={profile.bio}
                      onChange={(e) => handleChange("bio", e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border focus:border-[#1A73E8] outline-none h-32"
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Expertise */}
            <section className="mb-10">
              <h2 className="md:text-xl font-semibold mb-6">
                Areas of Expertise
              </h2>
              <form onSubmit={handleAddExpertise} className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Add expertise..."
                  className="border px-3 py-2 rounded-lg w-full"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-4 rounded-lg"
                >
                  Add
                </button>
              </form>
              <div className="flex flex-wrap gap-2 mt-2">
                {expertise.map((tag, idx) => (
                  <span
                    key={`${tag}-${idx}`}
                    className="px-4 py-2 bg-blue-50 text-[#1A73E8] rounded-full flex items-center"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveExpertise(tag)}
                      className="ml-2 text-sm"
                    >
                      <FontAwesomeIcon icon={faTimes} />
                    </button>
                  </span>
                ))}
              </div>
            </section>

            {/* Experience & Education */}
            <section className="mb-10">
              <h2 className="md:text-xl font-semibold mb-6">
                Experience & Education
              </h2>
              <div className="space-y-6">
                <div className="p-4 border rounded-xl bg-gray-50">
                  <label className="block text-sm font-medium mb-2">
                    Years of Experience
                  </label>
                  <input
                    type="number"
                    value={profile.experience}
                    onChange={(e) => handleChange("experience", e.target.value)}
                    className="w-full px-4 py-2 rounded-full border focus:border-[#1A73E8] outline-none"
                  />
                </div>

                <div className="p-4 border rounded-xl bg-gray-50">
                  <label className="block text-sm font-medium mb-2">
                    Education
                  </label>
                  <input
                    type="text"
                    value={profile.education}
                    onChange={(e) => handleChange("education", e.target.value)}
                    className="w-full px-4 py-2 rounded-full border focus:border-[#1A73E8] outline-none"
                  />
                </div>

                <div className="p-4 border rounded-xl bg-gray-50">
                  <label className="block text-sm font-medium mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    value={profile.linkedin}
                    onChange={(e) => handleChange("linkedin", e.target.value)}
                    className="w-full px-4 py-2 rounded-full border focus:border-[#1A73E8] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Languages
                  </label>
                  <Select
                    isMulti
                    options={languageOptions}
                    value={languages}
                    onChange={handleLanguageChange}
                    className="text-sm"
                  />
                </div>
              </div>
            </section>

            {/* Submit */}
            <div className="flex justify-end">
              <button
                onClick={handleSubmit}
                disabled={loading || !dirty}
                className={`px-6 py-2 rounded-full text-white flex items-center justify-center gap-2 ${
                  loading || !dirty
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#1A73E8] hover:bg-blue-600"
                }`}
              >
                {loading && (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                )}
                {loading ? "Saving..." : "Complete Profile"}
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProfileSetup;
