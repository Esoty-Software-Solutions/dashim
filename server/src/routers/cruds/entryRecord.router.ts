import { Router, json } from "express";
import { EntryRecord } from "@models/entryRecord.model";

export const entryRecordRouter = Router();

entryRecordRouter.get("/", async (req, res) => {
  res.json(req.originalUrl);
});
entryRecordRouter.get("/aggregate", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await EntryRecord.aggregate(req, input, { bypassMiddleware: true }));
});
entryRecordRouter.get("/findFirst", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await EntryRecord.findFirst(req, input, { bypassMiddleware: true }));
});
entryRecordRouter.get("/findMany", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await EntryRecord.findMany(req, input, { bypassMiddleware: true }));
});
entryRecordRouter.get("/tableQuery", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  const [data, filteredCount, unFilteredCount] = await Promise.all([
    EntryRecord.findMany(req, input),
    EntryRecord.count(req, { where: input?.where }),
    EntryRecord.count(req),
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
entryRecordRouter.get("/findUnique", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await EntryRecord.findUnique(req, input, { bypassMiddleware: true }));
});
entryRecordRouter.get("/findUniqueOrThrow", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(
    await EntryRecord.findUniqueOrThrow(req, input, { bypassMiddleware: true }),
  );
});
entryRecordRouter.get("/groupBy", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await EntryRecord.groupBy(req, input, { bypassMiddleware: true }));
});
entryRecordRouter.get("/count", async (req, res) => {
  const input = JSON.parse(req.query.q as string);
  res.json(await EntryRecord.count(req, input, { bypassMiddleware: true }));
});
entryRecordRouter.post("/createMany", async (req, res) => {
  res.json(await EntryRecord.createMany(req, req.body, { bypassMiddleware: true }));
});
entryRecordRouter.post("/createOne", async (req, res) => {
  res.json(await EntryRecord.createOne(req, req.body, { bypassMiddleware: true }));
});
entryRecordRouter.post("/deleteMany", async (req, res) => {
  res.json(await EntryRecord.deleteMany(req, req.body, { bypassMiddleware: true }));
});
entryRecordRouter.post("/deleteOne", async (req, res) => {
  res.json(await EntryRecord.deleteOne(req, req.body, { bypassMiddleware: true }));
});
entryRecordRouter.post("/updateMany", async (req, res) => {
  res.json(await EntryRecord.updateMany(req, req.body, { bypassMiddleware: true }));
});
entryRecordRouter.post("/updateOne", async (req, res) => {
  res.json(await EntryRecord.updateOne(req, req.body, { bypassMiddleware: true }));
});
entryRecordRouter.post("/upsert", async (req, res) => {
  res.json(await EntryRecord.upsert(req, req.body, { bypassMiddleware: true }));
});
