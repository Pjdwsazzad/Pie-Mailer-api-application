import express from 'express';
import axios from 'axios';
import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'url';
import FormData from 'form-data'; // Import FormData
import fs from 'fs'; // Import fs module

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const upload = multer({ dest: 'uploads/' });
const BASE_URL = 'https://pie-mailer.koyeb.app';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Upload SMTP configuration
app.post('/upload_smtp', upload.single('smtp_credentials'), async (req, res) => {
    try {
        const formData = new FormData();
        formData.append('smtp_credentials', fs.createReadStream(req.file.path), {
            filename: req.file.originalname // Include the original file name
        });

        const response = await axios.post(`${BASE_URL}/upload_smtp`, formData, {
            headers: {
                ...formData.getHeaders(), // Set the correct headers
            },
        });
        res.send(response.data);
    } catch (error) {
        console.error('Error uploading SMTP configuration:', error);
        res.status(500).send('Error uploading SMTP configuration');
    }
});

// Upload email template
app.post('/upload_template', upload.single('email_template'), async (req, res) => {
    try {
        const formData = new FormData();
        formData.append('email_template', fs.createReadStream(req.file.path), {
            filename: req.file.originalname // Include the original file name
        });

        const response = await axios.post(`${BASE_URL}/upload_template`, formData, {
            headers: {
                ...formData.getHeaders(), // Set the correct headers
            },
        });
        res.send(response.data);
    } catch (error) {
        console.error('Error uploading email template:', error);
        res.status(500).send('Error uploading email template');
    }
});

// Upload recipient list
app.post('/upload_recipients', upload.single('recipients_list'), async (req, res) => {
    try {
        const formData = new FormData();
        formData.append('recipients_list', fs.createReadStream(req.file.path), {
            filename: req.file.originalname // Include the original file name
        });

        const response = await axios.post(`${BASE_URL}/upload_recipients`, formData, {
            headers: {
                ...formData.getHeaders(), // Set the correct headers
            },
        });
        res.send(response.data);
    } catch (error) {
        console.error('Error uploading recipients list:', error);
        res.status(500).send('Error uploading recipients list');
    }
});

// Trigger email sending
app.post('/send_emails', async (req, res) => {
    try {
        const response = await axios.post(`${BASE_URL}/send_emails`, req.body);
        res.send(response.data);
    } catch (error) {
        console.error('Error sending emails:', error);
        res.status(500).send('Error sending emails');
    }
});

// Fetch logs
app.get('/download_logs', async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/download_logs`, { responseType: 'stream' });
        response.data.pipe(res);
    } catch (error) {
        console.error('Error fetching logs:', error);
        res.status(500).send('Error fetching logs');
    }
});

// Fetch SMTP list
app.get('/list_smtp', async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/list_smtp`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching SMTP list:', error);
        res.status(500).send('Error fetching SMTP list');
    }
});

// Fetch templates
app.get('/list_templates', async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/list_templates`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching templates:', error);
        res.status(500).send('Error fetching templates');
    }
});

// Fetch recipients
app.get('/list_recipients', async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/list_recipients`);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching recipients:', error);
        res.status(500).send('Error fetching recipients');
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`API client running on port ${PORT}`);
});
