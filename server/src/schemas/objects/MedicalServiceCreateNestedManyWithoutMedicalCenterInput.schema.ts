import { z } from 'zod';
import { MedicalServiceCreateWithoutMedicalCenterInputObjectSchema } from './MedicalServiceCreateWithoutMedicalCenterInput.schema';
import { MedicalServiceUncheckedCreateWithoutMedicalCenterInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutMedicalCenterInput.schema';
import { MedicalServiceCreateOrConnectWithoutMedicalCenterInputObjectSchema } from './MedicalServiceCreateOrConnectWithoutMedicalCenterInput.schema';
import { MedicalServiceCreateManyMedicalCenterInputEnvelopeObjectSchema } from './MedicalServiceCreateManyMedicalCenterInputEnvelope.schema';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceCreateNestedManyWithoutMedicalCenterInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => MedicalServiceCreateWithoutMedicalCenterInputObjectSchema,
          ),
          z
            .lazy(
              () => MedicalServiceCreateWithoutMedicalCenterInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              MedicalServiceUncheckedCreateWithoutMedicalCenterInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalServiceUncheckedCreateWithoutMedicalCenterInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              MedicalServiceCreateOrConnectWithoutMedicalCenterInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalServiceCreateOrConnectWithoutMedicalCenterInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => MedicalServiceCreateManyMedicalCenterInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
          z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MedicalServiceCreateNestedManyWithoutMedicalCenterInputObjectSchema =
  Schema;
