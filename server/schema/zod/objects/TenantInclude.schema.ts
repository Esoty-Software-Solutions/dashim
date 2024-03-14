/* eslint-disable */
import { z } from 'zod';
import { TenantTypeEnumArgsObjectSchema } from './TenantTypeEnumArgs.schema';
import { MedicalCenterArgsObjectSchema } from './MedicalCenterArgs.schema';
import { UserArgsObjectSchema } from './UserArgs.schema';
import { TenantMemberInputSchema } from '../input/TenantMemberInput.schema';
import { TenantCountOutputTypeArgsObjectSchema } from './TenantCountOutputTypeArgs.schema';

import type { Prisma } from '@prisma/client';

type SchemaType = z.ZodType<Prisma.TenantInclude>;
export const TenantIncludeObjectSchema: SchemaType = z
    .object({
        type: z.union([z.boolean(), z.lazy(() => TenantTypeEnumArgsObjectSchema)]).optional(),
        assignedToMedicalCenter: z.union([z.boolean(), z.lazy(() => MedicalCenterArgsObjectSchema)]).optional(),
        owner: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
        members: z.union([z.boolean(), z.lazy(() => TenantMemberInputSchema.findMany)]).optional(),
        _count: z.union([z.boolean(), z.lazy(() => TenantCountOutputTypeArgsObjectSchema)]).optional(),
    })
    .strict() as SchemaType;
