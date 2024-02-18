import { z } from 'zod';
import { MedicalServiceCreateWithoutBeneficiaryServicesInputObjectSchema } from './MedicalServiceCreateWithoutBeneficiaryServicesInput.schema';
import { MedicalServiceUncheckedCreateWithoutBeneficiaryServicesInputObjectSchema } from './MedicalServiceUncheckedCreateWithoutBeneficiaryServicesInput.schema';
import { MedicalServiceCreateOrConnectWithoutBeneficiaryServicesInputObjectSchema } from './MedicalServiceCreateOrConnectWithoutBeneficiaryServicesInput.schema';
import { MedicalServiceWhereUniqueInputObjectSchema } from './MedicalServiceWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceCreateNestedOneWithoutBeneficiaryServicesInput> =
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
      connect: z
        .lazy(() => MedicalServiceWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const MedicalServiceCreateNestedOneWithoutBeneficiaryServicesInputObjectSchema =
  Schema;
