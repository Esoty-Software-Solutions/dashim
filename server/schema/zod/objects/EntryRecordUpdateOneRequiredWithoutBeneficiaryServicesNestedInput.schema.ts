/* eslint-disable */
import { z } from 'zod';
import { EntryRecordCreateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordCreateWithoutBeneficiaryServicesInput.schema';
import { EntryRecordUncheckedCreateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordUncheckedCreateWithoutBeneficiaryServicesInput.schema';
import { EntryRecordCreateOrConnectWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordCreateOrConnectWithoutBeneficiaryServicesInput.schema';
import { EntryRecordUpsertWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordUpsertWithoutBeneficiaryServicesInput.schema';
import { EntryRecordWhereUniqueInputObjectSchema } from './EntryRecordWhereUniqueInput.schema';
import { EntryRecordUpdateToOneWithWhereWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordUpdateToOneWithWhereWithoutBeneficiaryServicesInput.schema';
import { EntryRecordUpdateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordUpdateWithoutBeneficiaryServicesInput.schema';
import { EntryRecordUncheckedUpdateWithoutBeneficiaryServicesInputObjectSchema } from './EntryRecordUncheckedUpdateWithoutBeneficiaryServicesInput.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.EntryRecordUpdateOneRequiredWithoutBeneficiaryServicesNestedInput>;
export const EntryRecordUpdateOneRequiredWithoutBeneficiaryServicesNestedInputObjectSchema: SchemaType = z
    .object({
        create: z
            .union([
                z.lazy(() => EntryRecordCreateWithoutBeneficiaryServicesInputObjectSchema),
                z.lazy(() => EntryRecordUncheckedCreateWithoutBeneficiaryServicesInputObjectSchema),
            ])
            .optional(),
        connectOrCreate: z.lazy(() => EntryRecordCreateOrConnectWithoutBeneficiaryServicesInputObjectSchema).optional(),
        upsert: z.lazy(() => EntryRecordUpsertWithoutBeneficiaryServicesInputObjectSchema).optional(),
        connect: z.lazy(() => EntryRecordWhereUniqueInputObjectSchema).optional(),
        update: z
            .union([
                z.lazy(() => EntryRecordUpdateToOneWithWhereWithoutBeneficiaryServicesInputObjectSchema),
                z.lazy(() => EntryRecordUpdateWithoutBeneficiaryServicesInputObjectSchema),
                z.lazy(() => EntryRecordUncheckedUpdateWithoutBeneficiaryServicesInputObjectSchema),
            ])
            .optional(),
    })
    .strict() as SchemaType;
