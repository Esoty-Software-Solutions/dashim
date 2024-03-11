import { Router, json } from "express";
import { BeneficiaryEntityFutureStatusChange } from "@models/beneficiaryEntityFutureStatusChange.model";

export const beneficiaryEntityFutureStatusChangeRouter = Router();

beneficiaryEntityFutureStatusChangeRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
beneficiaryEntityFutureStatusChangeRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryEntityFutureStatusChange.aggregate(req, input, { bypassMiddleware: true }));
});
beneficiaryEntityFutureStatusChangeRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryEntityFutureStatusChange.findFirst(req, input, { bypassMiddleware: true }));
});
beneficiaryEntityFutureStatusChangeRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryEntityFutureStatusChange.findMany(req, input, { bypassMiddleware: true }));
});
beneficiaryEntityFutureStatusChangeRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    BeneficiaryEntityFutureStatusChange.findMany(req, input),
    BeneficiaryEntityFutureStatusChange.count(req, { where: input?.where }),
    BeneficiaryEntityFutureStatusChange.count(req),
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
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryEntityFutureStatusChange.findUnique(req, input, { bypassMiddleware: true }));
});
beneficiaryEntityFutureStatusChangeRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await BeneficiaryEntityFutureStatusChange.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
beneficiaryEntityFutureStatusChangeRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryEntityFutureStatusChange.groupBy(req, input, { bypassMiddleware: true }));
});
beneficiaryEntityFutureStatusChangeRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await BeneficiaryEntityFutureStatusChange.count(req, input, { bypassMiddleware: true }));
});
beneficiaryEntityFutureStatusChangeRouter.post("/createMany", async (req, res) => {
  res.json(await BeneficiaryEntityFutureStatusChange.createMany(req, req.body, { bypassMiddleware: true }));
});
beneficiaryEntityFutureStatusChangeRouter.post("/createOne", async (req, res) => {
  res.json(await BeneficiaryEntityFutureStatusChange.createOne(req, req.body, { bypassMiddleware: true }));
});
beneficiaryEntityFutureStatusChangeRouter.post("/deleteMany", async (req, res) => {
  res.json(await BeneficiaryEntityFutureStatusChange.deleteMany(req, req.body, { bypassMiddleware: true }));
});
beneficiaryEntityFutureStatusChangeRouter.post("/deleteOne", async (req, res) => {
  res.json(await BeneficiaryEntityFutureStatusChange.deleteOne(req, req.body, { bypassMiddleware: true }));
});
beneficiaryEntityFutureStatusChangeRouter.post("/updateMany", async (req, res) => {
  res.json(await BeneficiaryEntityFutureStatusChange.updateMany(req, req.body, { bypassMiddleware: true }));
});
beneficiaryEntityFutureStatusChangeRouter.post("/updateOne", async (req, res) => {
  res.json(await BeneficiaryEntityFutureStatusChange.updateOne(req, req.body, { bypassMiddleware: true }));
});
beneficiaryEntityFutureStatusChangeRouter.post("/upsert", async (req, res) => {
  res.json(await BeneficiaryEntityFutureStatusChange.upsert(req, req.body, { bypassMiddleware: true }));
});
