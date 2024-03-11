import { Router, json } from "express";
import { BeneficiaryEntity } from "@models/beneficiaryEntity.model";
import { unGuardedPrisma } from "@config/db";

export const beneficiaryEntityRouter = Router();

beneficiaryEntityRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
beneficiaryEntityRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryEntity.aggregate(input));
});
beneficiaryEntityRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryEntity.findFirst(input));
});
beneficiaryEntityRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryEntity.findMany(input));
});
beneficiaryEntityRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.beneficiaryEntity.findMany(input),
    unGuardedPrisma.beneficiaryEntity.count({ where: input?.where }),
    unGuardedPrisma.beneficiaryEntity.count(),
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
beneficiaryEntityRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryEntity.findUnique(input));
});
beneficiaryEntityRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryEntity.findUniqueOrThrow(input));
});
beneficiaryEntityRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryEntity.groupBy(input));
});
beneficiaryEntityRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryEntity.count(input));
});
beneficiaryEntityRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryEntity.createMany(input));
});
beneficiaryEntityRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryEntity.create(input));
});
beneficiaryEntityRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryEntity.deleteMany(input));
});
beneficiaryEntityRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryEntity.delete(input));
});
beneficiaryEntityRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryEntity.updateMany(input));
});
beneficiaryEntityRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryEntity.update(input));
});
beneficiaryEntityRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryEntity.upsert(input));
});
