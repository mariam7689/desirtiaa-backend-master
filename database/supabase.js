import { createClient } from '@supabase/supabase-js';

// هدول المفاتيح مأخوذة من صور الإعدادات اللي بعتيها حالاً
const supabaseUrl = 'https://teaejvcyranohzaupyye.supabase.co';
const supabaseKey = 'sb_publishable_yiCN9iz2DHd-U8ba5BXmwQ_pVXZPy0O';

export const supabase = createClient(supabaseUrl, supabaseKey);

console.log("Supabase Client Initialized with New Keys!");