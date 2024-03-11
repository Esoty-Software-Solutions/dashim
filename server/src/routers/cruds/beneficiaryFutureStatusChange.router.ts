import { Router, json } from "express";
import { BeneficiaryFutureStatusChange } from "@models/beneficiaryFutureStatusChange.model";

export const beneficiaryFutureStatusChangeRouter = Router();

beneficiaryFutureStatusChangeRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
beneficiaryFutureStatusChangeRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryFutureStatusChange.aggregate(req, input, { bypassMiddleware: true }));
});
beneficiaryFutureStatusChangeRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryFutureStatusChange.findFirst(req, input, { bypassMiddleware: true }));
});
beneficiaryFutureStatusChangeRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryFutureStatusChange.findMany(req, input, { bypassMiddleware: true }));
});
beneficiaryFutureStatusChangeRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    BeneficiaryFutureStatusChange.findMany(req, input),
    BeneficiaryFutureStatusChange.count(req, { where: input?.where }),
    BeneficiaryFutureStatusChange.count(req),
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
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryFutureStatusChange.findUnique(req, input, { bypassMiddleware: true }));
});
beneficiaryFutureStatusChangeRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await BeneficiaryFutureStatusChange.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
beneficiaryFutureStatusChangeRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryFutureStatusChange.groupBy(req, input, { bypassMiddleware: true }));
});
beneficiaryFutureStatusChangeRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryFutureStatusChange.count(req, input, { bypassMiddleware: true }));
});
beneficiaryFutureStatusChangeRouter.post("/createMany", async (req, res) => {
  res.json(await BeneficiaryFutureStatusChange.createMany(req, req.body, { bypassMiddleware: true }));
});
beneficiaryFutureStatusChangeRouter.post("/createOne", async (req, res) => {
  res.json(await BeneficiaryFutureStatusChange.createOne(req, req.body, { bypassMiddleware: true }));
});
beneficiaryFutureStatusChangeRouter.post("/deleteMany", async (req, res) => {
  res.json(await BeneficiaryFutureStatusChange.deleteMany(req, req.body, { bypassMiddleware: true }));
});
beneficiaryFutureStatusChangeRouter.post("/deleteOne", async (req, res) => {
  res.json(await BeneficiaryFutureStatusChange.deleteOne(req, req.body, { bypassMiddleware: true }));
});
beneficiaryFutureStatusChangeRouter.post("/updateMany", async (req, res) => {
  res.json(await BeneficiaryFutureStatusChange.updateMany(req, req.body, { bypassMiddleware: true }));
});
beneficiaryFutureStatusChangeRouter.post("/updateOne", async (req, res) => {
  res.json(await BeneficiaryFutureStatusChange.updateOne(req, req.body, { bypassMiddleware: true }));
});
beneficiaryFutureStatusChangeRouter.post("/upsert", async (req, res) => {
  res.json(await BeneficiaryFutureStatusChange.upsert(req, req.body, { bypassMiddleware: true }));
});
