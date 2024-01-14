import { z } from 'zod';
import { LabReportAttachmentUpdateInputObjectSchema } from './objects/LabReportAttachmentUpdateInput.schema';
import { LabReportAttachmentUncheckedUpdateInputObjectSchema } from './objects/LabReportAttachmentUncheckedUpdateInput.schema';
import { LabReportAttachmentWhereUniqueInputObjectSchema } from './objects/LabReportAttachmentWhereUniqueInput.schema';

export const LabReportAttachmentUpdateOneSchema = z.object({
  data: z.union([
    LabReportAttachmentUpdateInputObjectSchema,
    LabReportAttachmentUncheckedUpdateInputObjectSchema,
  ]),
  where: LabReportAttachmentWhereUniqueInputObjectSchema,
});
