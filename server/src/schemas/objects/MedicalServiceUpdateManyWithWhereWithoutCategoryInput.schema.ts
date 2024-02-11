import { z } from 'zod';
import { MedicalServiceScalarWhereInputObjectSchema } from './MedicalServiceScalarWhereInput.schema';
import { MedicalServiceUpdateManyMutationInputObjectSchema } from './MedicalServiceUpdateManyMutationInput.schema';
import { MedicalServiceUncheckedUpdateManyWithoutServicesInputObjectSchema } from './MedicalServiceUncheckedUpdateManyWithoutServicesInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.MedicalServiceUpdateManyWithWhereWithoutCategoryInput> =
  z
    .object({
      where: z.lazy(() => MedicalServiceScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => MedicalServiceUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            MedicalServiceUncheckedUpdateManyWithoutServicesInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const MedicalServiceUpdateManyWithWhereWithoutCategoryInputObjectSchema =
  Schema;
