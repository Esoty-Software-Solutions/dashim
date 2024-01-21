import { z } from 'zod';
import { MedicalServiceCreateWithoutTemplateInputObjectSchema } from './MedicalServiceCreateWithoutTemplateInput.schema';
import { MedicalServiceUncheckedCreateWithoutTemplateInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutTemplateInput.schema';
import { MedicalServiceCreateOrConnectWithoutTemplateInputObjectSchema } from './MedicalServiceCreateOrConnectWithoutTemplateInput.schema';
import { MedicalServiceUpsertWithWhereUniqueWithoutTemplateInputObjectSchema } from './MedicalServiceUpsertWithWhereUniqueWithoutTemplateInput.schema';
import { MedicalServiceCreateManyTemplateInputEnvelopeObjectSchema } from './MedicalServiceCreateManyTemplateInputEnvelope.schema';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';
import { MedicalServiceUpdateWithWhereUniqueWithoutTemplateInputObjectSchema } from './MedicalServiceUpdateWithWhereUniqueWithoutTemplateInput.schema';
import { MedicalServiceUpdateManyWithWhereWithoutTemplateInputObjectSchema } from './MedicalServiceUpdateManyWithWhereWithoutTemplateInput.schema';
import { MedicalServiceScalarWhereInputObjectSchema } from './MedicalServiceScalarWhereInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceUpdateManyWithoutTemplateNestedInput> =
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
      upsert: z
        .union([
          z.lazy(
            () =>
              MedicalServiceUpsertWithWhereUniqueWithoutTemplateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalServiceUpsertWithWhereUniqueWithoutTemplateInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(() => MedicalServiceCreateManyTemplateInputEnvelopeObjectSchema)
        .optional(),
      set: z
        .union([
          z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
          z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      disconnect: z
        .union([
          z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
          z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      delete: z
        .union([
          z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
          z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      connect: z
        .union([
          z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema),
          z.lazy(() => MedicalServiceWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              MedicalServiceUpdateWithWhereUniqueWithoutTemplateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalServiceUpdateWithWhereUniqueWithoutTemplateInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      updateMany: z
        .union([
          z.lazy(
            () =>
              MedicalServiceUpdateManyWithWhereWithoutTemplateInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                MedicalServiceUpdateManyWithWhereWithoutTemplateInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      deleteMany: z
        .union([
          z.lazy(() => MedicalServiceScalarWhereInputObjectSchema),
          z.lazy(() => MedicalServiceScalarWhereInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const MedicalServiceUpdateManyWithoutTemplateNestedInputObjectSchema =
  Schema;
