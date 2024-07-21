import * as z from "zod";

export const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  username: z.string(),
  email: z.string().email(),
  home_address: z.string(),
  date_of_birth: z.string(),
  education: z.string(),
  work_history: z.string(),
  phone_number: z.string(),
  job_title: z.string(),
  imageUrl: z.string(),
  x: z
    .string()
    .url()
    .regex(
      /^https?:\/\/(www\.)?twitter\.com\/[A-Za-z0-9_]{1,15}$/,
      "Invalid Twitter URL"
    )
    .optional(),
  instagram: z
    .string()
    .url()
    .regex(
      /^https?:\/\/(www\.)?instagram\.com\/[A-Za-z0-9_.]+$/,
      "Invalid Instagram URL"
    )
    .optional(),
  youtube: z
    .string()
    .url()
    .regex(
      /^https?:\/\/(www\.)?youtube\.com\/(channel\/|user\/)?[A-Za-z0-9_-]+$/,
      "Invalid YouTube URL"
    )
    .optional(),
  tiktok: z
    .string()
    .url()
    .regex(
      /^https?:\/\/(www\.)?tiktok\.com\/@[A-Za-z0-9_.]+$/,
      "Invalid TikTok URL"
    )
    .optional(),
  linkedin: z
    .string()
    .url()
    .regex(
      /^https?:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9_-]+$/,
      "Invalid LinkedIn URL"
    )
    .optional(),
  info: z.string(),
  skills: z.any(),
});

export type FormValues = z.infer<typeof FormSchema>;
