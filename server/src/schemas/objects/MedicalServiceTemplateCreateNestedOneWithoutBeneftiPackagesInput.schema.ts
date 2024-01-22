import { z } from 'zod';
import { MedicalServiceTemplateCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceTemplateCreateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceTemplateUncheckedCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceTemplateUncheckedCreateWithoutBeneftiPackagesInput.schema';
import { MedicalServiceTemplateCreateOrConnectWithoutBeneftiPackagesInputObjectSchema } from './MedicalServiceTemplateCreateOrConnectWithoutBeneftiPackagesInput.schema';
import { MedicalServiceTemplateWhereUniqueInputObjectSchema } from './MedicalServiceTemplateWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceTemplateCreateNestedOneWithoutBeneftiPackagesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              MedicalServiceTemplateCreateWithoutBeneftiPackagesInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalServiceTemplateUncheckedCreateWithoutBeneftiPackagesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            MedicalServiceTemplateCreateOrConnectWithoutBeneftiPackagesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => MedicalServiceTemplateWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const MedicalServiceTemplateCreateNestedOneWithoutBeneftiPackagesInputObjectSchema =
  Schema;
