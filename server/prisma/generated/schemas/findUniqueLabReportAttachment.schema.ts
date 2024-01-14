import { z } from 'zod';
import { LabReportAttachmentWhereUniqueInputObjectSchema } from './objects/LabReportAttachmentWhereUniqueInput.schema';

export const LabReportAttachmentFindUniqueSchema = z.object({
  where: LabReportAttachmentWhereUniqueInputObjectSchema,
});
