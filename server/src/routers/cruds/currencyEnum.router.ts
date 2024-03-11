import { Router, json } from "express";
import { CurrencyEnum } from "@models/currencyEnum.model";

export const currencyEnumRouter = Router();

currencyEnumRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
currencyEnumRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await CurrencyEnum.aggregate(req, input, { bypassMiddleware: true }));
});
currencyEnumRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await CurrencyEnum.findFirst(req, input, { bypassMiddleware: true }));
});
currencyEnumRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await CurrencyEnum.findMany(req, input, { bypassMiddleware: true }));
});
currencyEnumRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    CurrencyEnum.findMany(req, input),
    CurrencyEnum.count(req, { where: input?.where }),
    CurrencyEnum.count(req),
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
currencyEnumRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await CurrencyEnum.findUnique(req, input, { bypassMiddleware: true }));
});
currencyEnumRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await CurrencyEnum.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
currencyEnumRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await CurrencyEnum.groupBy(req, input, { bypassMiddleware: true }));
});
currencyEnumRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await CurrencyEnum.count(req, input, { bypassMiddleware: true }));
});
currencyEnumRouter.post("/createMany", async (req, res) => {
  res.json(await CurrencyEnum.createMany(req, req.body, { bypassMiddleware: true }));
});
currencyEnumRouter.post("/createOne", async (req, res) => {
  res.json(await CurrencyEnum.createOne(req, req.body, { bypassMiddleware: true }));
});
currencyEnumRouter.post("/deleteMany", async (req, res) => {
  res.json(await CurrencyEnum.deleteMany(req, req.body, { bypassMiddleware: true }));
});
currencyEnumRouter.post("/deleteOne", async (req, res) => {
  res.json(await CurrencyEnum.deleteOne(req, req.body, { bypassMiddleware: true }));
});
currencyEnumRouter.post("/updateMany", async (req, res) => {
  res.json(await CurrencyEnum.updateMany(req, req.body, { bypassMiddleware: true }));
});
currencyEnumRouter.post("/updateOne", async (req, res) => {
  res.json(await CurrencyEnum.updateOne(req, req.body, { bypassMiddleware: true }));
});
currencyEnumRouter.post("/upsert", async (req, res) => {
  res.json(await CurrencyEnum.upsert(req, req.body, { bypassMiddleware: true }));
});
