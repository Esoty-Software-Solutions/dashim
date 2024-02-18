import { z } from 'zod';
import { MedicalCenterCreateWithoutCityInputObjectSchema } from './MedicalCenterCreateWithoutCityInput.schema';
import { MedicalCenterUncheckedCreateWithoutCityInputObjectSchema } from './MedicalCenterUncheckedCreateWithoutCityInput.schema';
import { MedicalCenterCreateOrConnectWithoutCityInputObjectSchema } from './MedicalCenterCreateOrConnectWithoutCityInput.schema';
import { MedicalCenterCreateManyCityInputEnvelopeObjectSchema } from './MedicalCenterCreateManyCityInputEnvelope.schema';
import { MedicalCenterWhereUniqueInputObjectSchema } from './MedicalCenterWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterCreateNestedManyWithoutCityInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(() => MedicalCenterCreateWithoutCityInputObjectSchema),
          z.lazy(() => MedicalCenterCreateWithoutCityInputObjectSchema).array(),
          z.lazy(
            () => MedicalCenterUncheckedCreateWithoutCityInputObjectSchema,
          ),
          z
            .lazy(
              () => MedicalCenterUncheckedCreateWithoutCityInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () => MedicalCenterCreateOrConnectWithoutCityInputObjectSchema,
          ),
          z
            .lazy(
              () => MedicalCenterCreateOrConnectWithoutCityInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MedicalCenterCreateManyCityInputEnvelopeObjectSchema)
        .optional(),
      connect: z
        .union([
          z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema),
          z.lazy(() => MedicalCenterWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MedicalCenterCreateNestedManyWithoutCityInputObjectSchema = Schema;
