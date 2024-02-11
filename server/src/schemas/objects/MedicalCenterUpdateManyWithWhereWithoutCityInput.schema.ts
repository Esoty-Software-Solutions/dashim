import { z } from 'zod';
import { MedicalCenterScalarWhereInputObjectSchema } from './MedicalCenterScalarWhereInput.schema';
import { MedicalCenterUpdateManyMutationInputObjectSchema } from './MedicalCenterUpdateManyMutationInput.schema';
import { MedicalCenterUncheckedUpdateManyWithoutMedicalcentersInputObjectSchema } from './MedicalCenterUncheckedUpdateManyWithoutMedicalcentersInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalCenterUpdateManyWithWhereWithoutCityInput> =
  z
    .object({
      where: z.lazy(() => MedicalCenterScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => MedicalCenterUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            MedicalCenterUncheckedUpdateManyWithoutMedicalcentersInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalCenterUpdateManyWithWhereWithoutCityInputObjectSchema =
  Schema;
