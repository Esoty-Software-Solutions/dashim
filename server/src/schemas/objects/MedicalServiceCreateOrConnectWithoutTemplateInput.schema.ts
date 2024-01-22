import { z } from 'zod';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';
import { MedicalServiceCreateWithoutTemplateInputObjectSchema } from './MedicalServiceCreateWithoutTemplateInput.schema';
import { MedicalServiceUncheckedCreateWithoutTemplateInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutTemplateInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceCreateOrConnectWithoutTemplateInput> =
  z
    .object({
      where: z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
      create: z.union([
        z.lazy(() => MedicalServiceCreateWithoutTemplateInputObjectSchema),
        z.lazy(
          () => MedicalServiceUncheckedCreateWithoutTemplateInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalServiceCreateOrConnectWithoutTemplateInputObjectSchema =
  Schema;
