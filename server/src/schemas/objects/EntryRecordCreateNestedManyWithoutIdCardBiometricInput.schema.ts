import { z } from 'zod';
import { EntryRecordCreateWithoutIdCardBiometricInputObjectSchema } from './EntryRecordCreateWithoutIdCardBiometricInput.schema';
import { EntryRecordUncheckedCreateWithoutIdCardBiometricInputObjectSchema } from './EntryRecordUncheckedCreateWithoutIdCardBiometricInput.schema';
import { EntryRecordCreateOrConnectWithoutIdCardBiometricInputObjectSchema } from './EntryRecordCreateOrConnectWithoutIdCardBiometricInput.schema';
import { EntryRecordCreateManyIdCardBiometricInputEnvelopeObjectSchema } from './EntryRecordCreateManyIdCardBiometricInputEnvelope.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.EntryRecordCreateNestedManyWithoutIdCardBiometricInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () => EntryRecordCreateWithoutIdCardBiometricInputObjectSchema,
          ),
          z
            .lazy(
              () => EntryRecordCreateWithoutIdCardBiometricInputObjectSchema,
            )
            .array(),
          z.lazy(
            () =>
              EntryRecordUncheckedCreateWithoutIdCardBiometricInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordUncheckedCreateWithoutIdCardBiometricInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      connectOrCreate: z
        .union([
          z.lazy(
            () =>
              EntryRecordCreateOrConnectWithoutIdCardBiometricInputObjectSchema,
          ),
          z
            .lazy(
              () =>
                EntryRecordCreateOrConnectWithoutIdCardBiometricInputObjectSchema,
            )
            .array(),
        ])
        .optional(),
      createMany: z
        .lazy(
          () => EntryRecordCreateManyIdCardBiometricInputEnvelopeObjectSchema,
        )
        .optional(),
      connect: z
        .union([
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema),
          z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).array(),
        ])
        .optional(),
    })
    .strict();

export const EntryRecordCreateNestedManyWithoutIdCardBiometricInputObjectSchema =
  Schema;
