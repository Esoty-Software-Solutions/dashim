import { z } from 'zod';
import { MedicalCenterServiceTemplateCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterServiceTemplateCreateWithoutBeneftiPackagesInput.schema';
import { MedicalCenterServiceTemplateUncheckedCreateWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterServiceTemplateUncheckedCreateWithoutBeneftiPackagesInput.schema';
import { MedicalCenterServiceTemplateCreateOrConnectWithoutBeneftiPackagesInputObjectSchema } from './MedicalCenterServiceTemplateCreateOrConnectWithoutBeneftiPackagesInput.schema';
import { MedicalCenterServiceTemplateWhereUniqueInputObjectSchema } from './MedicalCenterServiceTemplateWhereUniqueInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterServiceTemplateCreateNestedOneWithoutBeneftiPackagesInput> =
  z
    .object({
      create: z
        .union([
          z.lazy(
            () =>
              MedicalCenterServiceTemplateCreateWithoutBeneftiPackagesInputObjectSchema,
          ),
          z.lazy(
            () =>
              MedicalCenterServiceTemplateUncheckedCreateWithoutBeneftiPackagesInputObjectSchema,
          ),
        ])
        .optional(),
      connectOrCreate: z
        .lazy(
          () =>
            MedicalCenterServiceTemplateCreateOrConnectWithoutBeneftiPackagesInputObjectSchema,
        )
        .optional(),
      connect: z
        .lazy(() => MedicalCenterServiceTemplateWhereUniqueInputObjectSchema)
        .optional(),
    })
    .strict();

export const MedicalCenterServiceTemplateCreateNestedOneWithoutBeneftiPackagesInputObjectSchema =
  Schema;
