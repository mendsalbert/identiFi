// components/CustomImageUploader.tsx
import React, { useState } from "react";

interface CustomImageUploaderProps {
  onImagesChange: (files: File[]) => void;
}

const CustomImageUploader: React.FC<CustomImageUploaderProps> = ({
  onImagesChange,
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      onImagesChange([file]);
    }
  };

  return (
    <div className="items-center justify-center w-full">
      <label className="text-sm">Profile Image</label>
      <input type="file" onChange={handleFileChange} />
      {selectedFile && (
        <img
          src={URL.createObjectURL(selectedFile)}
          alt="Selected"
          className="mt-2"
        />
      )}
    </div>
  );
};

export default CustomImageUploader;
