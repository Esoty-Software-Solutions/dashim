import { Router, json } from "express";
import { CountryEnum } from "@models/countryEnum.model";

export const countryEnumRouter = Router();

countryEnumRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
countryEnumRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await CountryEnum.aggregate(req, input, { bypassMiddleware: true }));
});
countryEnumRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await CountryEnum.findFirst(req, input, { bypassMiddleware: true }));
});
countryEnumRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await CountryEnum.findMany(req, input, { bypassMiddleware: true }));
});
countryEnumRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    CountryEnum.findMany(req, input),
    CountryEnum.count(req, { where: input?.where }),
    CountryEnum.count(req),
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
countryEnumRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await CountryEnum.findUnique(req, input, { bypassMiddleware: true }));
});
countryEnumRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await CountryEnum.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
countryEnumRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await CountryEnum.groupBy(req, input, { bypassMiddleware: true }));
});
countryEnumRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await CountryEnum.count(req, input, { bypassMiddleware: true }));
});
countryEnumRouter.post("/createMany", async (req, res) => {
  res.json(await CountryEnum.createMany(req, req.body, { bypassMiddleware: true }));
});
countryEnumRouter.post("/createOne", async (req, res) => {
  res.json(await CountryEnum.createOne(req, req.body, { bypassMiddleware: true }));
});
countryEnumRouter.post("/deleteMany", async (req, res) => {
  res.json(await CountryEnum.deleteMany(req, req.body, { bypassMiddleware: true }));
});
countryEnumRouter.post("/deleteOne", async (req, res) => {
  res.json(await CountryEnum.deleteOne(req, req.body, { bypassMiddleware: true }));
});
countryEnumRouter.post("/updateMany", async (req, res) => {
  res.json(await CountryEnum.updateMany(req, req.body, { bypassMiddleware: true }));
});
countryEnumRouter.post("/updateOne", async (req, res) => {
  res.json(await CountryEnum.updateOne(req, req.body, { bypassMiddleware: true }));
});
countryEnumRouter.post("/upsert", async (req, res) => {
  res.json(await CountryEnum.upsert(req, req.body, { bypassMiddleware: true }));
});
