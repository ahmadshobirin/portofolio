<script setup lang="ts">
const handleSubmit = (event: Event) => {
  event.preventDefault();
  // Add form submission logic here
};
</script>

<template>
  <form @submit="handleSubmit" class="max-w-2xl mx-auto space-y-6">
    <div>
      <label for="name" class="block text-sm font-medium text-elegant-800">Name</label>
      <input type="text" id="name" name="name" required
        class="mt-1 block w-full rounded-md border-elegant-200 shadow-sm focus:border-accent-500 focus:ring-accent-500" />
    </div>
    <div>
      <label for="email" class="block text-sm font-medium text-elegant-800">Email</label>
      <input type="email" id="email" name="email" required
        class="mt-1 block w-full rounded-md border-elegant-200 shadow-sm focus:border-accent-500 focus:ring-accent-500" />
    </div>
    <div>
      <label for="projectType" class="block text-sm font-medium text-elegant-800">Project Type</label>
      <select id="projectType" name="projectType" required
        class="mt-1 block w-full rounded-md border-elegant-200 shadow-sm focus:border-accent-500 focus:ring-accent-500">
        <option value="">Select a project type</option>
        <option value="backend">Backend Development</option>
        <option value="api">API Design</option>
        <option value="architecture">System Architecture</option>
        <option value="consulting">Technical Consulting</option>
      </select>
    </div>
    <div>
      <label for="message" class="block text-sm font-medium text-elegant-800">Project Details</label>
      <textarea id="message" name="message" rows="4" required
        class="mt-1 block w-full rounded-md border-elegant-200 shadow-sm focus:border-accent-500 focus:ring-accent-500"
        placeholder="Tell me about your project and how I can help..."></textarea>
    </div>
    <div>
      <button type="submit" class="w-full btn-primary">
        Start the Conversation
      </button>
    </div>
  </form>
</template>