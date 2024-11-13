import { connectionStr } from "@/lib/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { Product } from "@/lib/model/product";

export async function GET() {
    let data = [];
    try {
        await mongoose.connect(connectionStr);
        data = await Product.find();
    } catch (error) {
        data = { success: false, message: "Failed to fetch data" };
    }
    return NextResponse.json({ result: data });
}

export async function POST(request) {
    try {
        const payload = await request.json();
        await mongoose.connect(connectionStr);
        const product = new Product(payload);
        const result = await product.save();

        return NextResponse.json({ result: "New product created", success: true }, { status: 201 });
    } catch (error) {
        console.error("POST request error:", error);
        return NextResponse.json({ success: false, message: "Error creating product" }, { status: 500 });
    }
}
