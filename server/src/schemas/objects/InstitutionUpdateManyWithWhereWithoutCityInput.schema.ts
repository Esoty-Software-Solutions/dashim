import { z } from 'zod';
import { InstitutionScalarWhereInputObjectSchema } from './InstitutionScalarWhereInput.schema';
import { InstitutionUpdateManyMutationInputObjectSchema } from './InstitutionUpdateManyMutationInput.schema';
import { InstitutionUncheckedUpdateManyWithoutInstitutionsInputObjectSchema } from './InstitutionUncheckedUpdateManyWithoutInstitutionsInput.schema';

import type { Prisma } from '@prisma/client';

const Schema: z.ZodType<Prisma.InstitutionUpdateManyWithWhereWithoutCityInput> =
  z
    .object({
      where: z.lazy(() => InstitutionScalarWhereInputObjectSchema),
      data: z.union([
        z.lazy(() => InstitutionUpdateManyMutationInputObjectSchema),
        z.lazy(
          () =>
            InstitutionUncheckedUpdateManyWithoutInstitutionsInputObjectSchema,
        ),
      ]),
    })
    .strict();

export const InstitutionUpdateManyWithWhereWithoutCityInputObjectSchema =
  Schema;
