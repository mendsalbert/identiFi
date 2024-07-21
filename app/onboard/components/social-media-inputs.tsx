// components/SocialMediaInputs.tsx
import React from "react";
import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface SocialMediaInputsProps {
  formData: any;
  handleChange: (name: string, value: any) => void;
  errors: any;
}

const SocialMediaInputs: React.FC<SocialMediaInputsProps> = ({
  formData,
  handleChange,
  errors,
}) => (
  <>
    <FormItem className="items-center justify-center w-full">
      <FormLabel className="text-sm">
        {errors?.x && <p className="text-red-500 text-xs mt-1">{errors?.x}</p>}X
        (Formerly Twitter)
      </FormLabel>
      <FormControl>
        <Input
          placeholder="https://x.com/johndoe"
          onChange={(e) => handleChange("x", e.target.value)}
          value={formData.x}
        />
      </FormControl>
    </FormItem>

    <FormItem className="items-center justify-center w-full">
      <FormLabel className="text-sm">
        {errors?.instagram && (
          <p className="text-red-500 text-xs mt-1">{errors?.instagram}</p>
        )}
        Instagram
      </FormLabel>
      <FormControl>
        <Input
          placeholder="https://www.instagram.com/johndoe"
          onChange={(e) => handleChange("instagram", e.target.value)}
          value={formData.instagram}
        />
      </FormControl>
    </FormItem>

    <FormItem className="items-center justify-center w-full">
      <FormLabel className="text-sm">
        {errors?.tiktok && (
          <p className="text-red-500 text-xs mt-1">{errors?.tiktok}</p>
        )}
        TikTok
      </FormLabel>
      <FormControl>
        <Input
          placeholder="https://www.tiktok.com/@johndoe"
          onChange={(e) => handleChange("tiktok", e.target.value)}
          value={formData.tiktok}
        />
      </FormControl>
    </FormItem>

    <FormItem className="items-center justify-center w-full">
      <FormLabel className="text-sm">
        {errors?.youtube && (
          <p className="text-red-500 text-xs mt-1">{errors?.youtube}</p>
        )}
        YouTube
      </FormLabel>
      <FormControl>
        <Input
          placeholder="https://www.youtube.com/user/johndoe"
          onChange={(e) => handleChange("youtube", e.target.value)}
          value={formData.youtube}
        />
      </FormControl>
    </FormItem>

    <FormItem className="items-center justify-center w-full">
      <FormLabel className="text-sm">
        {errors?.linkedin && (
          <p className="text-red-500 text-xs mt-1">{errors?.linkedin}</p>
        )}
        LinkedIn
      </FormLabel>
      <FormControl>
        <Input
          placeholder="https://www.linkedin.com/in/johndoe"
          onChange={(e) => handleChange("linkedin", e.target.value)}
          value={formData.linkedin}
        />
      </FormControl>
    </FormItem>
  </>
);

export default SocialMediaInputs;
