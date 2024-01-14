import { z } from 'zod';
import { LabReportAttachmentWhereInputObjectSchema } from './objects/LabReportAttachmentWhereInput.schema';

export const LabReportAttachmentDeleteManySchema = z.object({
  where: LabReportAttachmentWhereInputObjectSchema.optional(),
});
