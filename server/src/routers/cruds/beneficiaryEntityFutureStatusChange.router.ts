import { Router, json } from "express";
import { BeneficiaryEntityFutureStatusChange } from "@models/beneficiaryEntityFutureStatusChange.model";
import { unGuardedPrisma } from "@config/db";

export const beneficiaryEntityFutureStatusChangeRouter = Router();

beneficiaryEntityFutureStatusChangeRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
beneficiaryEntityFutureStatusChangeRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryEntityFutureStatusChange.aggregate(input));
});
beneficiaryEntityFutureStatusChangeRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryEntityFutureStatusChange.findFirst(input));
});
beneficiaryEntityFutureStatusChangeRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryEntityFutureStatusChange.findMany(input));
});
beneficiaryEntityFutureStatusChangeRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.beneficiaryEntityFutureStatusChange.findMany(input),
    unGuardedPrisma.beneficiaryEntityFutureStatusChange.count({ where: input?.where }),
    unGuardedPrisma.beneficiaryEntityFutureStatusChange.count(),
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
beneficiaryEntityFutureStatusChangeRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryEntityFutureStatusChange.findUnique(input));
});
beneficiaryEntityFutureStatusChangeRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryEntityFutureStatusChange.findUniqueOrThrow(input));
});
beneficiaryEntityFutureStatusChangeRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryEntityFutureStatusChange.groupBy(input));
});
beneficiaryEntityFutureStatusChangeRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryEntityFutureStatusChange.count(input));
});
beneficiaryEntityFutureStatusChangeRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryEntityFutureStatusChange.createMany(input));
});
beneficiaryEntityFutureStatusChangeRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryEntityFutureStatusChange.create(input));
});
beneficiaryEntityFutureStatusChangeRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryEntityFutureStatusChange.deleteMany(input));
});
beneficiaryEntityFutureStatusChangeRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryEntityFutureStatusChange.delete(input));
});
beneficiaryEntityFutureStatusChangeRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryEntityFutureStatusChange.updateMany(input));
});
beneficiaryEntityFutureStatusChangeRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryEntityFutureStatusChange.update(input));
});
beneficiaryEntityFutureStatusChangeRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryEntityFutureStatusChange.upsert(input));
});
