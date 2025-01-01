import Property from "@/models/Property"
import connectDB from "@/config/database"

export const GET = async (request, { params }) => {
    try {
        await connectDB();
        const properties = await Property.findById(params.id);
        if(!properties) return new Response('Property not found', { status: 404 });
        return new Response(properties, {
            status: 200,
        });
    } catch (error) {
        return new Response('Something went wrong', { status: 500 });
    }
} 