// components/FormFields.tsx
import React from "react";
import { FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface FormFieldsProps {
  formData: any;
  handleChange: (name: string, value: any) => void;
  errors: any;
}

const FormFields: React.FC<FormFieldsProps> = ({ formData, handleChange }) => (
  <>
    <div className="md:flex items-center gap-6">
      <FormItem className="items-center justify-center w-full">
        <FormLabel className="text-sm">First name *</FormLabel>
        <FormControl>
          <Input
            placeholder="Satoshi"
            onChange={(e) => handleChange("first_name", e.target.value)}
            value={formData.first_name}
          />
        </FormControl>
      </FormItem>

      <FormItem className="items-center justify-center w-full">
        <FormLabel className="w-60 text-sm">Last name *</FormLabel>
        <FormControl>
          <Input
            placeholder="Nakamoto"
            onChange={(e) => handleChange("last_name", e.target.value)}
            value={formData.last_name}
          />
        </FormControl>
      </FormItem>
    </div>

    <FormItem className="items-center justify-center w-full">
      <FormLabel className="w-60 text-sm">Username *</FormLabel>
      <FormControl>
        <Input
          placeholder="satoshinakamoto"
          onChange={(e) => handleChange("username", e.target.value)}
          value={formData.username}
        />
      </FormControl>
    </FormItem>

    <div className="md:flex items-center gap-6">
      <FormItem className="items-center justify-center w-full">
        <FormLabel className="text-sm">Home Address *</FormLabel>
        <FormControl>
          <Input
            placeholder="18670 Coastal Highway"
            onChange={(e) => handleChange("home_address", e.target.value)}
            value={formData.home_address}
          />
        </FormControl>
      </FormItem>

      <FormItem className="items-center justify-center w-full">
        <FormLabel className="w-60 text-sm">Date of Birth *</FormLabel>
        <FormControl>
          <Input
            type="date"
            onChange={(e) => handleChange("date_of_birth", e.target.value)}
            value={formData.date_of_birth}
          />
        </FormControl>
      </FormItem>
    </div>

    <div className="md:flex items-center gap-6">
      <FormItem className="items-center justify-center w-full">
        <FormLabel className="text-sm">Education *</FormLabel>
        <FormControl>
          <Input
            placeholder="Harvard"
            onChange={(e) => handleChange("education", e.target.value)}
            value={formData.education}
          />
        </FormControl>
      </FormItem>

      <FormItem className="items-center justify-center w-full">
        <FormLabel className="w-60 text-sm">Work History *</FormLabel>
        <FormControl>
          <Input
            type="text"
            placeholder="Apple, Google, Amazon"
            onChange={(e) => handleChange("work_history", e.target.value)}
            value={formData.work_history}
          />
        </FormControl>
      </FormItem>
    </div>

    <FormItem className="items-center justify-center w-full">
      <FormLabel className="text-sm">Email *</FormLabel>
      <FormControl>
        <Input
          placeholder="satoshinakamoto@gmail.com"
          onChange={(e) => handleChange("email", e.target.value)}
          value={formData.email}
        />
      </FormControl>
    </FormItem>

    <FormItem className="items-center justify-center w-full">
      <FormLabel className="text-sm">Phone number *</FormLabel>
      <FormControl>
        <Input
          placeholder="+123456789-0"
          onChange={(e) => handleChange("phone_number", e.target.value)}
          value={formData.phone_number}
        />
      </FormControl>
    </FormItem>

    <FormItem className="items-center justify-center w-full">
      <FormLabel className="text-sm">Job Title *</FormLabel>
      <FormControl>
        <Input
          placeholder="Designer"
          onChange={(e) => handleChange("job_title", e.target.value)}
          value={formData.job_title}
        />
      </FormControl>
    </FormItem>
  </>
);

export default FormFields;
