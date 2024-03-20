import { z } from "zod";

export const RegisterSchema = z.object({
      name: z.string().min(1, "Name is required"),
      email: z.string().min(1, "Email required").email("Not a valid email"),
      password: z.string().min(1, "Password number required"),
      phone: z.string().min(1, "Phone number required").max(12, "Phone too long"),
  
      organizationData: z.object({
        name: z.string().min(1, "Name is required"),
        domain: z.string().min(1, "Domain required"),
        hrId: z.coerce.number().optional(),
      }),
    })

    export const loginSchema = z.object({
        email: z.string().min(1, "Email required").email("Not a valid email"),
        password: z.string().min(1, "Password number required"),
    });

    export const employeeSchema = z.object({
        personalDetails: z.object({
          fullname: z.string().nullable(),
          dob: z.string().nullable(),
          maritalStatus: z.string().nullable(),
          gender: z.string().nullable(),
          careerSummary: z.string().nullable(),
          nationality: z.string().nullable(),
        }),
        contactDetails: z.object({
          email: z.string().nullable(),
          phoneNumber: z.string().nullable(),
        }),
        address: z.object({
          country: z.string().nullable(),
          city: z.string().nullable(),
          otherAddress: z.string().nullable(),
        }),
        educationalBackground: z.array(
          z.object({
            schoolName: z.string().nullable(),
            period: z.string().nullable(),
            details: z.string().nullable(),
          })
        ),
        experience: z.array(
          z.object({
            institution: z.string().nullable(),
            period: z.string().nullable(),
            title: z.string().nullable(),
            details: z.string().nullable(),
          })
        ),
        skills: z.array(z.string().nullable()),
        certifications: z.array(z.string().nullable()),
        languages: z.array(z.string().nullable()),
        socialMediaProfiles: z.array(
          z.object({
            mediaName: z.string().nullable(),
            url: z.string().nullable(),
          })
        ),
        bankInfo: z.object({
          accountHolderName: z.string().nullable(),
          accountNumber: z.string().nullable(),
          bankName: z.string().nullable(),
        }),
        employmentDetails: z.object({
          employeeID: z.string().nullable(),
          employeeType: z.string().nullable(),
          designation: z.string().nullable(),
          workingDays: z.string().nullable(),
          officeLocation: z.string().nullable(),
          joiningDate: z.string().nullable(),
          salary: z.string().nullable(),
        }),
    
        // Documents
        salarySlip: z.any().nullable(),
        appointmentLetter: z.any().nullable(),
        experienceLetter: z.any().nullable(),
        relievingLetter: z.any().nullable(),
        contract: z.any().nullable(),
    });
 export type EmployeeSchemaType=z.infer<typeof employeeSchema>                                                                                                                                     
 export type SignInSchemaType=z.infer<typeof loginSchema>  
 export type SignUpSchemaType = z.infer<typeof RegisterSchema>;