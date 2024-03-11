import { Router, json } from "express";
import { BeneficiaryBalance } from "@models/beneficiaryBalance.model";

export const beneficiaryBalanceRouter = Router();

beneficiaryBalanceRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
beneficiaryBalanceRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryBalance.aggregate(req, input, { bypassMiddleware: true }));
});
beneficiaryBalanceRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryBalance.findFirst(req, input, { bypassMiddleware: true }));
});
beneficiaryBalanceRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryBalance.findMany(req, input, { bypassMiddleware: true }));
});
beneficiaryBalanceRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    BeneficiaryBalance.findMany(req, input),
    BeneficiaryBalance.count(req, { where: input?.where }),
    BeneficiaryBalance.count(req),
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
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryBalance.findUnique(req, input, { bypassMiddleware: true }));
});
beneficiaryBalanceRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await BeneficiaryBalance.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
beneficiaryBalanceRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryBalance.groupBy(req, input, { bypassMiddleware: true }));
});
beneficiaryBalanceRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryBalance.count(req, input, { bypassMiddleware: true }));
});
beneficiaryBalanceRouter.post("/createMany", async (req, res) => {
  res.json(await BeneficiaryBalance.createMany(req, req.body, { bypassMiddleware: true }));
});
beneficiaryBalanceRouter.post("/createOne", async (req, res) => {
  res.json(await BeneficiaryBalance.createOne(req, req.body, { bypassMiddleware: true }));
});
beneficiaryBalanceRouter.post("/deleteMany", async (req, res) => {
  res.json(await BeneficiaryBalance.deleteMany(req, req.body, { bypassMiddleware: true }));
});
beneficiaryBalanceRouter.post("/deleteOne", async (req, res) => {
  res.json(await BeneficiaryBalance.deleteOne(req, req.body, { bypassMiddleware: true }));
});
beneficiaryBalanceRouter.post("/updateMany", async (req, res) => {
  res.json(await BeneficiaryBalance.updateMany(req, req.body, { bypassMiddleware: true }));
});
beneficiaryBalanceRouter.post("/updateOne", async (req, res) => {
  res.json(await BeneficiaryBalance.updateOne(req, req.body, { bypassMiddleware: true }));
});
beneficiaryBalanceRouter.post("/upsert", async (req, res) => {
  res.json(await BeneficiaryBalance.upsert(req, req.body, { bypassMiddleware: true }));
});
