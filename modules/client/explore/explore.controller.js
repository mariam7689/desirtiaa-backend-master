import { supabase } from '../../../database/supabase.js';

// 1. جلب كل الأماكن
export const getAllHiddenGems = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('hidden_gems')
            .select('*');

        if (error) {
            console.log("Supabase Error:", error);
            throw error;
        }

        res.status(200).json({ success: true, data: data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// 2. جلب مكان واحد بالـ ID (عشان لما نضغط على المكان)
export const getHiddenGemById = async (req, res) => {
    try {
        const { id } = req.params;
        const { data, error } = await supabase
            .from('hidden_gems')
            .select('*')
            .eq('id', id)
            .single();

        if (error) throw error;

        res.status(200).json({ success: true, data: data });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};