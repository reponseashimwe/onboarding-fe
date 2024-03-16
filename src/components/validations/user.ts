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

    export const employeeSchema= z.object({
      body: z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().min(1, "Email required").email("Not a valid email"),
        password: z.string().min(1, "Password number required"),
        phone: z.string().min(1, "Phone number required").max(12, "Phone too long"),
        organizationId: z.coerce.number().optional(),
      }),
    });
 export type EmployeeSchemaType=z.infer<typeof employeeSchema>
 export type SignInSchemaType=z.infer<typeof loginSchema>  
 export type SignUpSchemaType = z.infer<typeof RegisterSchema>;