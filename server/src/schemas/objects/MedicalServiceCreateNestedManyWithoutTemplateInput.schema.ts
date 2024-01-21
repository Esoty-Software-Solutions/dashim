import { z } from 'zod';
import { MedicalServiceCreateWithoutTemplateInputObjectSchema } from './MedicalServiceCreateWithoutTemplateInput.schema';
import { MedicalServiceUncheckedCreateWithoutTemplateInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutTemplateInput.schema';
import { MedicalServiceCreateOrConnectWithoutTemplateInputObjectSchema } from './MedicalServiceCreateOrConnectWithoutTemplateInput.schema';
import { MedicalServiceCreateManyTemplateInputEnvelopeObjectSchema } from './MedicalServiceCreateManyTemplateInputEnvelope.schema';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceCreateNestedManyWithoutTemplateInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MedicalServiceCreateWithoutTemplateInputObjectSchema),
          z
            .lazy(() => MedicalServiceCreateWithoutTemplateInputObjectSchema)
            .array(),
          z.lazy(
            () => MedicalServiceUncheckedCreateWithoutTemplateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalServiceUncheckedCreateWithoutTemplateInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => MedicalServiceCreateOrConnectWithoutTemplateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalServiceCreateOrConnectWithoutTemplateInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MedicalServiceCreateManyTemplateInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
          z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MedicalServiceCreateNestedManyWithoutTemplateInputObjectSchema =
  Schema;
