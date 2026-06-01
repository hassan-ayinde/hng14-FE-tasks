import { z } from "zod";

const addressSchema = z.object({
  streetAddress: z
    .string()
    .min(1, "Street address is required"),

  city: z
    .string()
    .min(1, "City is required"),

  postalCode: z
    .string()
    .min(1, "Postal code is required"),

  country: z
    .string()
    .min(1, "Country is required"),
});

const itemSchema = z.object({
  name: z
    .string()
    .min(1, "Item name is required"),

  quantity: z.coerce
    .number()
    .min(1, "Quantity must be at least 1"),

  price: z.coerce
    .number()
    .min(1, "Price is required"),

  total: z.coerce.number(),

  currency: z.string(),
});

export const invoiceSchema = z.object({
  sentFrom: addressSchema,

  billTo: addressSchema.extend({
    name: z
      .string()
      .min(1, "Client name is required"),

    email: z
      .string()
      .email("Invalid email address"),
  }),

  invoiceDate: z.date().nullable(),

  paymentTerms: z.enum([
    "Net 1 Day",
    "Net 7 Days",
    "Net 14 Days",
    "Net 30 Days",
  ]).default("Net 14 Days"),

  items: z
    .array(itemSchema)
    .min(1, "At least one item is required"),
});

export type InvoiceFormData = z.infer<typeof invoiceSchema>;