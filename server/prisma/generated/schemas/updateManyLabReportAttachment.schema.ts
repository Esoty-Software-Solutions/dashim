import { z } from 'zod';
import { LabReportAttachmentUpdateManyMutationInputObjectSchema } from './objects/LabReportAttachmentUpdateManyMutationInput.schema';
import { LabReportAttachmentWhereInputObjectSchema } from './objects/LabReportAttachmentWhereInput.schema';

export const LabReportAttachmentUpdateManySchema = z.object({
  data: LabReportAttachmentUpdateManyMutationInputObjectSchema,
  where: LabReportAttachmentWhereInputObjectSchema.optional(),
});
