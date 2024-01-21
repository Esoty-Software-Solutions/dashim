import { z } from 'zod';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';
import { MedicalServiceUpdateWithoutTemplateInputObjectSchema } from './MedicalServiceUpdateWithoutTemplateInput.schema';
import { MedicalServiceUncheckedUpdateWithoutTemplateInputObjectSchema } from './MedicalServiceUncheckedUpdateWithoutTemplateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceUpdateWithWhereUniqueWithoutTemplateInput> =
  z
    .object({
      where: z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
      data: z.union([
        z.lazy(() => MedicalServiceUpdateWithoutTemplateInputObjectSchema),
        z.lazy(
          () => MedicalServiceUncheckedUpdateWithoutTemplateInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalServiceUpdateWithWhereUniqueWithoutTemplateInputObjectSchema =
  Schema;
