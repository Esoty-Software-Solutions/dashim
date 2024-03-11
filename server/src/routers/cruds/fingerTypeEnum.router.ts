import { Router, json } from "express";
import { FingerTypeEnum } from "@models/fingerTypeEnum.model";

export const fingerTypeEnumRouter = Router();

fingerTypeEnumRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
fingerTypeEnumRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await FingerTypeEnum.aggregate(req, input, { bypassMiddleware: true }));
});
fingerTypeEnumRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await FingerTypeEnum.findFirst(req, input, { bypassMiddleware: true }));
});
fingerTypeEnumRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await FingerTypeEnum.findMany(req, input, { bypassMiddleware: true }));
});
fingerTypeEnumRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    FingerTypeEnum.findMany(req, input),
    FingerTypeEnum.count(req, { where: input?.where }),
    FingerTypeEnum.count(req),
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
fingerTypeEnumRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await FingerTypeEnum.findUnique(req, input, { bypassMiddleware: true }));
});
fingerTypeEnumRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await FingerTypeEnum.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
fingerTypeEnumRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await FingerTypeEnum.groupBy(req, input, { bypassMiddleware: true }));
});
fingerTypeEnumRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await FingerTypeEnum.count(req, input, { bypassMiddleware: true }));
});
fingerTypeEnumRouter.post("/createMany", async (req, res) => {
  res.json(await FingerTypeEnum.createMany(req, req.body, { bypassMiddleware: true }));
});
fingerTypeEnumRouter.post("/createOne", async (req, res) => {
  res.json(await FingerTypeEnum.createOne(req, req.body, { bypassMiddleware: true }));
});
fingerTypeEnumRouter.post("/deleteMany", async (req, res) => {
  res.json(await FingerTypeEnum.deleteMany(req, req.body, { bypassMiddleware: true }));
});
fingerTypeEnumRouter.post("/deleteOne", async (req, res) => {
  res.json(await FingerTypeEnum.deleteOne(req, req.body, { bypassMiddleware: true }));
});
fingerTypeEnumRouter.post("/updateMany", async (req, res) => {
  res.json(await FingerTypeEnum.updateMany(req, req.body, { bypassMiddleware: true }));
});
fingerTypeEnumRouter.post("/updateOne", async (req, res) => {
  res.json(await FingerTypeEnum.updateOne(req, req.body, { bypassMiddleware: true }));
});
fingerTypeEnumRouter.post("/upsert", async (req, res) => {
  res.json(await FingerTypeEnum.upsert(req, req.body, { bypassMiddleware: true }));
});
