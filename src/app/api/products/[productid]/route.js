

import { connectionStr } from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


// update product api

export async function PUT(request, context) {
    const productId = context.params.productid;
    console.log("Product ID:", productId);

    const filter = { _id: productId };
    const payload = await request.json();
    console.log("Payload:", payload);

    try {
        await mongoose.connect(connectionStr);

        const result = await Product.findOneAndUpdate(filter, payload, { new: true });

        if (!result) {
            return NextResponse.json({ message: "Product not found", success: false });
        }

        return NextResponse.json({ result, success: true });
    } catch (error) {
        console.error("Error updating product:", error);
        return NextResponse.json({ error: error.message, success: false });
    } finally {
        mongoose.connection.close();
    }
}


// single product api

export async function GET(request , content) {
    
    const productId = content.params.productid;
    const record = {_id : productId}
    await mongoose.connect(connectionStr)
    const result = await Product.findById(record)
    return NextResponse.json({result, success: true})
    
}

//delete api

export async function DELETE(request, content) {

    const productId = content.params.productid;
    const record = {_id :productId}
    await mongoose.connect(connectionStr)
    const result = await Product.deleteOne(record)
    return NextResponse.json({result, success: true})
    
}
