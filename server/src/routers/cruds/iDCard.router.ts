import { Router, json } from "express";
import { IDCard } from "@models/iDCard.model";

export const iDCardRouter = Router();

iDCardRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
iDCardRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await IDCard.aggregate(req, input, { bypassMiddleware: true }));
});
iDCardRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await IDCard.findFirst(req, input, { bypassMiddleware: true }));
});
iDCardRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await IDCard.findMany(req, input, { bypassMiddleware: true }));
});
iDCardRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    IDCard.findMany(req, input),
    IDCard.count(req, { where: input?.where }),
    IDCard.count(req),
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
iDCardRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await IDCard.findUnique(req, input, { bypassMiddleware: true }));
});
iDCardRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await IDCard.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
iDCardRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await IDCard.groupBy(req, input, { bypassMiddleware: true }));
});
iDCardRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await IDCard.count(req, input, { bypassMiddleware: true }));
});
iDCardRouter.post("/createMany", async (req, res) => {
  res.json(await IDCard.createMany(req, req.body, { bypassMiddleware: true }));
});
iDCardRouter.post("/createOne", async (req, res) => {
  res.json(await IDCard.createOne(req, req.body, { bypassMiddleware: true }));
});
iDCardRouter.post("/deleteMany", async (req, res) => {
  res.json(await IDCard.deleteMany(req, req.body, { bypassMiddleware: true }));
});
iDCardRouter.post("/deleteOne", async (req, res) => {
  res.json(await IDCard.deleteOne(req, req.body, { bypassMiddleware: true }));
});
iDCardRouter.post("/updateMany", async (req, res) => {
  res.json(await IDCard.updateMany(req, req.body, { bypassMiddleware: true }));
});
iDCardRouter.post("/updateOne", async (req, res) => {
  res.json(await IDCard.updateOne(req, req.body, { bypassMiddleware: true }));
});
iDCardRouter.post("/upsert", async (req, res) => {
  res.json(await IDCard.upsert(req, req.body, { bypassMiddleware: true }));
});
