import { Router, json } from "express";
import { Tenant } from "@models/tenant.model";
import { unGuardedPrisma } from "@config/db";

export const tenantRouter = Router();

tenantRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
tenantRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.tenant.aggregate(input));
});
tenantRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.tenant.findFirst(input));
});
tenantRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.tenant.findMany(input));
});
tenantRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.tenant.findMany(input),
    unGuardedPrisma.tenant.count({ where: input?.where }),
    unGuardedPrisma.tenant.count(),
  ]);
  const statistics: {
    key: string;
    value: string | number | boolean;
  }[] = [];
  res.json({
    data,
    filteredCount,
    unFilteredCount,
    statistics,
  });
});
tenantRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.tenant.findUnique(input));
});
tenantRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.tenant.findUniqueOrThrow(input));
});
tenantRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.tenant.groupBy(input));
});
tenantRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.tenant.count(input));
});
tenantRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.tenant.createMany(input));
});
tenantRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.tenant.create(input));
});
tenantRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.tenant.deleteMany(input));
});
tenantRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.tenant.delete(input));
});
tenantRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.tenant.updateMany(input));
});
tenantRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.tenant.update(input));
});
tenantRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.tenant.upsert(input));
});
