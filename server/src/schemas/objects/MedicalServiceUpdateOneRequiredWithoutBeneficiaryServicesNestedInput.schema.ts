import { z } from 'zod';
import { MedicalServiceCreateWithoutBeneficiaryServicesInputObjectSchema } from './MedicalServiceCreateWithoutBeneficiaryServicesInput.schema';
import { MedicalServiceUncheckedCreateWithoutBeneficiaryServicesInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutBeneficiaryServicesInput.schema';
import { MedicalServiceCreateOrConnectWithoutBeneficiaryServicesInputObjectSchema } from './MedicalServiceCreateOrConnectWithoutBeneficiaryServicesInput.schema';
import { MedicalServiceUpsertWithoutBeneficiaryServicesInputObjectSchema } from './MedicalServiceUpsertWithoutBeneficiaryServicesInput.schema';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';
import { MedicalServiceUpdateWithoutBeneficiaryServicesInputObjectSchema } from './MedicalServiceUpdateWithoutBeneficiaryServicesInput.schema';
import { MedicalServiceUncheckedUpdateWithoutBeneficiaryServicesInputObjectSchema } from './MedicalServiceUncheckedUpdateWithoutBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceUpdateOneRequiredWithoutBeneficiaryServicesNestedInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              MedicalServiceCreateWithoutBeneficiaryServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalServiceUncheckedCreateWithoutBeneficiaryServicesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            MedicalServiceCreateOrConnectWithoutBeneficiaryServicesInputObjectSchema,
        )
        .optional(),
      upsert: z
        .lazy(
          () => MedicalServiceUpsertWithoutBeneficiaryServicesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => MedicalServiceWhereUniqueInputObjectSchema)
        .optional(),
      update: z
        .union([
          z.lazy(
            () =>
              MedicalServiceUpdateWithoutBeneficiaryServicesInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalServiceUncheckedUpdateWithoutBeneficiaryServicesInputObjectSchema,
          ),
        ])
        .optional(),
    })
    .strict();

export const MedicalServiceUpdateOneRequiredWithoutBeneficiaryServicesNestedInputObjectSchema =
  Schema;
