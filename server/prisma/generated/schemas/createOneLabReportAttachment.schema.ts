import { z } from 'zod';
import { LabReportAttachmentCreateInputObjectSchema } from './objects/LabReportAttachmentCreateInput.schema';
import { LabReportAttachmentUncheckedCreateInputObjectSchema } from './objects/LabReportAttachmentUncheckedCreateInput.schema';

export const LabReportAttachmentCreateOneSchema = z.object({
  data: z.union([
    LabReportAttachmentCreateInputObjectSchema,
    LabReportAttachmentUncheckedCreateInputObjectSchema,
  ]),
});
