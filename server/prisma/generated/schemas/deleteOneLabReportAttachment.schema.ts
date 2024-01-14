import { z } from 'zod';
import { LabReportAttachmentWhereUniqueInputObjectSchema } from './objects/LabReportAttachmentWhereUniqueInput.schema';

export const LabReportAttachmentDeleteOneSchema = z.object({
  where: LabReportAttachmentWhereUniqueInputObjectSchema,
});
