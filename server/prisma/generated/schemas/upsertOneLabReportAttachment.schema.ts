import { z } from 'zod';
import { LabReportAttachmentWhereUniqueInputObjectSchema } from './objects/LabReportAttachmentWhereUniqueInput.schema';
import { LabReportAttachmentCreateInputObjectSchema } from './objects/LabReportAttachmentCreateInput.schema';
import { LabReportAttachmentUncheckedCreateInputObjectSchema } from './objects/LabReportAttachmentUncheckedCreateInput.schema';
import { LabReportAttachmentUpdateInputObjectSchema } from './objects/LabReportAttachmentUpdateInput.schema';
import { LabReportAttachmentUncheckedUpdateInputObjectSchema } from './objects/LabReportAttachmentUncheckedUpdateInput.schema';

export const LabReportAttachmentUpsertSchema = z.object({
  where: LabReportAttachmentWhereUniqueInputObjectSchema,
  create: z.union([
    LabReportAttachmentCreateInputObjectSchema,
    LabReportAttachmentUncheckedCreateInputObjectSchema,
  ]),
  update: z.union([
    LabReportAttachmentUpdateInputObjectSchema,
    LabReportAttachmentUncheckedUpdateInputObjectSchema,
  ]),
});
