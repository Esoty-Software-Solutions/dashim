import { z } from 'zod';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';
import { MedicalServiceUpdateWithoutTemplateInputObjectSchema } from './MedicalServiceUpdateWithoutTemplateInput.schema';
import { MedicalServiceUncheckedUpdateWithoutTemplateInputObjectSchema } from './MedicalServiceUncheckedUpdateWithoutTemplateInput.schema';
import { MedicalServiceCreateWithoutTemplateInputObjectSchema } from './MedicalServiceCreateWithoutTemplateInput.schema';
import { MedicalServiceUncheckedCreateWithoutTemplateInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutTemplateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceUpsertWithWhereUniqueWithoutTemplateInput> =
  z
    .object({
      where: z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
      update: z.union([
        z.lazy(() => MedicalServiceUpdateWithoutTemplateInputObjectSchema),
        z.lazy(
          () => MedicalServiceUncheckedUpdateWithoutTemplateInputObjectSchema,
        ),
      ]),
      create: z.union([
        z.lazy(() => MedicalServiceCreateWithoutTemplateInputObjectSchema),
        z.lazy(
          () => MedicalServiceUncheckedCreateWithoutTemplateInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalServiceUpsertWithWhereUniqueWithoutTemplateInputObjectSchema =
  Schema;
