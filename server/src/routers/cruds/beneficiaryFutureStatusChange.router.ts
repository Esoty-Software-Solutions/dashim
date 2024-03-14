import { Router, json } from "express";
import { BeneficiaryFutureStatusChange } from "@models/beneficiaryFutureStatusChange.model";
import { unGuardedPrisma } from "@config/db";

export const beneficiaryFutureStatusChangeRouter = Router();

beneficiaryFutureStatusChangeRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
beneficiaryFutureStatusChangeRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryFutureStatusChange.aggregate(input));
});
beneficiaryFutureStatusChangeRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryFutureStatusChange.findFirst(input));
});
beneficiaryFutureStatusChangeRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryFutureStatusChange.findMany(input));
});
beneficiaryFutureStatusChangeRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.beneficiaryFutureStatusChange.findMany(input),
    unGuardedPrisma.beneficiaryFutureStatusChange.count({ where: input?.where }),
    unGuardedPrisma.beneficiaryFutureStatusChange.count(),
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
beneficiaryFutureStatusChangeRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryFutureStatusChange.findUnique(input));
});
beneficiaryFutureStatusChangeRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryFutureStatusChange.findUniqueOrThrow(input));
});
beneficiaryFutureStatusChangeRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryFutureStatusChange.groupBy(input));
});
beneficiaryFutureStatusChangeRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryFutureStatusChange.count(input));
});
beneficiaryFutureStatusChangeRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryFutureStatusChange.createMany(input));
});
beneficiaryFutureStatusChangeRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryFutureStatusChange.create(input));
});
beneficiaryFutureStatusChangeRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryFutureStatusChange.deleteMany(input));
});
beneficiaryFutureStatusChangeRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryFutureStatusChange.delete(input));
});
beneficiaryFutureStatusChangeRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryFutureStatusChange.updateMany(input));
});
beneficiaryFutureStatusChangeRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryFutureStatusChange.update(input));
});
beneficiaryFutureStatusChangeRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryFutureStatusChange.upsert(input));
});
