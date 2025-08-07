import React, { useState, useRef } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ArrowLeft, Upload, Image, Mic, FileText, X, Check, Rocket, Star } from 'lucide-react';
import { Progress } from './ui/progress';

const UploadPage = ({ setCurrentPage }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [message, setMessage] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileUpload = (event) => {
    const files = Array.from(event.target.files);
    
    files.forEach(file => {
      if (file.size > 100 * 1024 * 1024) { // 100MB limit
        alert('File size must be less than 100MB');
        return;
      }

      const fileData = {
        id: Date.now() + Math.random(),
        file,
        name: file.name,
        size: file.size,
        type: file.type,
        preview: null
      };

      // Create preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setUploadedFiles(prev => 
            prev.map(f => f.id === fileData.id ? { ...f, preview: e.target.result } : f)
          );
        };
        reader.readAsDataURL(file);
      }

      setUploadedFiles(prev => [...prev, fileData]);
    });
  };

  const removeFile = (fileId) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileIcon = (type) => {
    if (type.startsWith('image/')) return Image;
    if (type.startsWith('audio/')) return Mic;
    return FileText;
  };

  const handleSubmit = async () => {
    if (uploadedFiles.length === 0 && !message.trim()) {
      alert('Please upload at least one file or add a message');
      return;
    }

    setIsUploading(true);
    setUploadProgress(0);

    // Simulate upload progress
    const progressInterval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setIsUploading(false);
          setUploadComplete(true);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);
  };

  const resetUpload = () => {
    setUploadedFiles([]);
    setMessage('');
    setUploadProgress(0);
    setUploadComplete(false);
    setIsUploading(false);
  };

  if (uploadComplete) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="absolute inset-0 stars-bg opacity-20" />
        <div className="relative z-10 text-center max-w-2xl mx-auto px-4">
          <div className="animate-float mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6">
              <Rocket className="h-12 w-12 text-white animate-pulse" />
            </div>
          </div>
          
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-6">
            Memory Capsule Launched!
          </h1>
          
          <p className="font-rajdhani text-xl text-gray-300 mb-8 leading-relaxed">
            Your precious memories are now traveling through the cosmos, preserved for eternity 
            among the stars. They will orbit in deep space as a testament to your existence.
          </p>
          
          <div className="glass p-6 rounded-2xl mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <Star className="h-6 w-6 text-cyan-400 animate-pulse" />
              <span className="font-rajdhani text-lg text-white">Capsule ID: CMO-{Date.now().toString().slice(-6)}</span>
              <Star className="h-6 w-6 text-cyan-400 animate-pulse" />
            </div>
            <p className="font-rajdhani text-gray-400">
              Your memory capsule will reach deep space in approximately 3-6 months
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={resetUpload}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-black font-rajdhani font-semibold px-8 py-3 rounded-full transition-all duration-300 hover-scale glow-cyan"
            >
              Upload Another Memory
            </Button>
            <Button 
              onClick={() => setCurrentPage('home')}
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 font-rajdhani font-semibold px-8 py-3 rounded-full transition-all duration-300 hover-scale glass"
            >
              Return Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="absolute inset-0 stars-bg opacity-20" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <Button
          onClick={() => setCurrentPage('home')}
          variant="outline"
          className="mb-8 border-white/30 text-white hover:bg-white/10 glass"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Button>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-6 animate-float">
            <Upload className="h-8 w-8 text-white" />
          </div>
          <h1 className="font-orbitron text-4xl md:text-5xl font-bold text-white mb-4">
            Create Your Memory Capsule
          </h1>
          <p className="font-rajdhani text-xl text-gray-300 max-w-2xl mx-auto">
            Upload your most precious memories to be preserved for eternity in deep space. 
            Photos, voice recordings, and messages will travel among the stars forever.
          </p>
        </div>

        {/* Upload Section */}
        <Card className="glass border-cyan-500/20 mb-8">
          <CardContent className="p-8">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-6">Upload Your Files</h2>
            
            <div 
              className="border-2 border-dashed border-cyan-500/30 rounded-2xl p-12 text-center hover:border-cyan-500/50 transition-colors cursor-pointer"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
              <h3 className="font-rajdhani text-xl text-white mb-2">
                Drag & drop your files here
              </h3>
              <p className="font-rajdhani text-gray-400 mb-4">
                or click to browse your device
              </p>
              <p className="font-rajdhani text-sm text-gray-500">
                Supports: JPG, PNG, MP3, WAV, TXT (Max 100MB per file)
              </p>
              
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/*,audio/*,.txt,.pdf"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div>

            {/* Uploaded Files Preview */}
            {uploadedFiles.length > 0 && (
              <div className="mt-8">
                <h3 className="font-orbitron text-lg font-semibold text-white mb-4">
                  Uploaded Files ({uploadedFiles.length})
                </h3>
                <div className="grid gap-4">
                  {uploadedFiles.map((file) => {
                    const FileIcon = getFileIcon(file.type);
                    return (
                      <div key={file.id} className="flex items-center space-x-4 p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                        {file.preview ? (
                          <img 
                            src={file.preview} 
                            alt={file.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                        ) : (
                          <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                            <FileIcon className="h-8 w-8 text-cyan-400" />
                          </div>
                        )}
                        
                        <div className="flex-1">
                          <p className="font-rajdhani text-white font-medium">{file.name}</p>
                          <p className="font-rajdhani text-gray-400 text-sm">{formatFileSize(file.size)}</p>
                        </div>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => removeFile(file.id)}
                          className="border-red-500/30 text-red-400 hover:bg-red-500/10"
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Message Section */}
        <Card className="glass border-cyan-500/20 mb-8">
          <CardContent className="p-8">
            <h2 className="font-orbitron text-2xl font-bold text-white mb-6">Add a Personal Message</h2>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a message to accompany your memories into space. Share your thoughts, hopes, or a story that matters to you..."
              className="w-full h-32 bg-gray-900/50 border border-gray-700 rounded-lg p-4 text-white placeholder-gray-400 font-rajdhani resize-none focus:outline-none focus:border-cyan-500 transition-colors"
              maxLength={1000}
            />
            <div className="flex justify-between items-center mt-2">
              <p className="font-rajdhani text-gray-400 text-sm">
                Optional: Add context or meaning to your memory capsule
              </p>
              <p className="font-rajdhani text-gray-400 text-sm">
                {message.length}/1000
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Upload Progress */}
        {isUploading && (
          <Card className="glass border-cyan-500/20 mb-8">
            <CardContent className="p-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full mb-4 animate-pulse">
                  <Rocket className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-orbitron text-xl font-bold text-white mb-4">
                  Launching Your Memory Capsule...
                </h3>
                <Progress value={uploadProgress} className="w-full mb-4" />
                <p className="font-rajdhani text-gray-400">
                  {uploadProgress < 30 ? 'Encrypting your memories...' :
                   uploadProgress < 60 ? 'Preparing for launch...' :
                   uploadProgress < 90 ? 'Initiating deep space trajectory...' :
                   'Final systems check...'}
                </p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Launch Button */}
        {!isUploading && (
          <div className="text-center">
            <Button 
              onClick={handleSubmit}
              disabled={uploadedFiles.length === 0 && !message.trim()}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 disabled:from-gray-600 disabled:to-gray-700 text-black font-rajdhani font-semibold px-12 py-4 rounded-full transition-all duration-300 hover-scale glow-cyan text-lg"
            >
              <Rocket className="mr-3 h-6 w-6" />
              Launch Memory Capsule
            </Button>
            <p className="font-rajdhani text-gray-400 text-sm mt-4">
              Your memories will be encrypted and launched into deep space within 24 hours
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadPage;

