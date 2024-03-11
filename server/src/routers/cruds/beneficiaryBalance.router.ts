import { Router, json } from "express";
import { BeneficiaryBalance } from "@models/beneficiaryBalance.model";
import { unGuardedPrisma } from "@config/db";

export const beneficiaryBalanceRouter = Router();

beneficiaryBalanceRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
beneficiaryBalanceRouter.get("/aggregate", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryBalance.aggregate(input));
});
beneficiaryBalanceRouter.get("/findFirst", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryBalance.findFirst(input));
});
beneficiaryBalanceRouter.get("/findMany", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryBalance.findMany(input));
});
beneficiaryBalanceRouter.get("/tableQuery", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    unGuardedPrisma.beneficiaryBalance.findMany(input),
    unGuardedPrisma.beneficiaryBalance.count({ where: input?.where }),
    unGuardedPrisma.beneficiaryBalance.count(),
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
beneficiaryBalanceRouter.get("/findUnique", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryBalance.findUnique(input));
});
beneficiaryBalanceRouter.get("/findUniqueOrThrow", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryBalance.findUniqueOrThrow(input));
});
beneficiaryBalanceRouter.get("/groupBy", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryBalance.groupBy(input));
});
beneficiaryBalanceRouter.get("/count", async (req, res) => {
  let input = {} as any;
  if (typeof req.query.q === "string") {
    input = JSON.parse(req.query.q);
  }
  res.json(await unGuardedPrisma.beneficiaryBalance.count(input));
});
beneficiaryBalanceRouter.post("/createMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryBalance.createMany(input));
});
beneficiaryBalanceRouter.post("/create", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryBalance.create(input));
});
beneficiaryBalanceRouter.post("/deleteMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryBalance.deleteMany(input));
});
beneficiaryBalanceRouter.post("/delete", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryBalance.delete(input));
});
beneficiaryBalanceRouter.post("/updateMany", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryBalance.updateMany(input));
});
beneficiaryBalanceRouter.post("/update", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryBalance.update(input));
});
beneficiaryBalanceRouter.post("/upsert", async (req, res) => {
  const input = req.body as any;
  res.json(await unGuardedPrisma.beneficiaryBalance.upsert(input));
});
